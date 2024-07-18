import { replace } from "lodash";
import numeral from "numeral";
import { format, formatDistanceToNow } from "date-fns";
import Decimal from "decimal.js";

// Number ----------------------------------------------------------------------

export function fNumberWithDecimal(str, length) {
  if (str) {
    //just 8 decimals when number
    if (typeof str === "number") {
      str = Math.floor(str * 1.0e8) / 1.0e8;
    } else {
      //remove text
      str = str.replace(/[^\d.]/g, ""); //clear text
    }
    str += "";
    const x = str.split(".");
    let x1 = x[0];
    const x2 = x[1];
    const x3 = x.length > 1 ? "." + x2.slice(0, length) : "";
    if (!x1) x1 = "0";
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1,$2");
    }
    let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
    return result;
  } else {
    return 0;
  }
}

export function fCurrency(number, fix, zeroNumber) {
  try {
    let str = zeroNumber ? new Decimal(number).toFixed(18) : (number + "")
    if (str.indexOf("e") >= 0) {
      str = number.toFixed(8) + "";
    }
    const deleteText = str.replace(/[^\d.]/g, ""); //clear text
    const x = deleteText.split(".");
    let x1 = x[0];
    const x2 = x[1];
    const x3 = x.length > 1 ? "." + x2.slice(0, fix || 8) : "";
    if (!x1) x1 = "0";
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1,$2");
    }
    let result = (x1 + x3).replace(/^0+(?!\.|$)/, "").replace(/^\./, "");
    return `${number < 0 ? "-" : ""}${result}`;
  } catch (e) {
    return "0.00";
  }
}

export function fPercent(number) {
  return numeral(number / 100).format("0.0%");
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return replace(numeral(number).format("0.00a"), ".00", "");
}

export function fData(number) {
  return numeral(number).format("0.0 b");
}

export function fRoundDown(number, decimals) {
  decimals = decimals || 0;
  return Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

export function shortenNumber(number, decimal, threshold = 1000, suffixes = ['', 'K', 'M', 'B', 'T']) {
  if (parseFloat(number) <= threshold) return fCurrency(number, decimal || 0)
  const absNum = Math.abs(number);
  const suffixIndex = Math.floor(Math.log10(absNum) / Math.log10(threshold));
  const formattedNum = number / Math.pow(threshold, suffixIndex);
  const suffix = suffixes[suffixIndex];
  return fCurrency(formattedNum, 2) + suffix;
}

export function fMillionOrBillionNumber(value) {
  if (typeof value !== 'number') {
    return 'Invalid input';
  }

  if (value >= 1e9) {
    return (value / 1e9).toFixed(2) + 'B';
  } else if (value >= 1e6) {
    return (value / 1e6).toFixed(2) + 'M';
  } else {
    return fNumberWithDecimal(value)
  }
}

// Date time ----------------------------------------------------------------------

export function fDate(date) {
  return format(new Date(date), "yyyy-MM-dd");
}

export function fDateTime(date, formatStr) {
  return format(new Date(date), formatStr || "yyyy-MM-dd HH:mm:ss");
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), "dd/MM/yyyy hh:mm p");
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}

// String ----------------------------------------------------------------------

export function fDisplayName(displayName = "") {
  const length = displayName.length;
  if (length > 15) {
    return `${displayName.substring(0, 5)}...${displayName.substring(
      length - 5,
      length
    )}`;
  }
  return displayName;
}

// Orderbook  ----------------------------------------------------------------------
export function getRandomArbitrary(min, max) {
  return new Decimal(Math.random() * (max - min) + min)
    .toDecimalPlaces(5, Decimal.ROUND_DOWN)
    .toNumber();
}

export const formatOrderbook = (inputArray = [], defaultDecimal = 0, sortMode, totalRecord) => {
  const decimal = defaultDecimal < 0 ? 0 : defaultDecimal
  const tens = Decimal.pow(10, Decimal.abs(defaultDecimal))
  const resultMap = {};

  inputArray.forEach(([key, value1]) => {
    const price = Decimal
      .div(key, defaultDecimal < 0 ? tens : 1)
      .toDP(decimal, Decimal.ROUND_UP)
      .mul(defaultDecimal < 0 ? tens : 1)
      .toNumber();

    const amount = new Decimal(value1).toNumber();

    if (resultMap.hasOwnProperty(price)) {
      resultMap[price][0] = Decimal.add(amount, resultMap[price][0]).toNumber();
      resultMap[price][1] = Decimal.mul(price, amount).toNumber()
    } else {
      resultMap[price] = [amount, Decimal.mul(price, amount).toNumber()];
    }
  });

  const formattedOrderbook = Object.entries(resultMap).map(
    ([key, [value1, value2]]) => {
      return [
        new Decimal(key).toFixed(decimal),
        new Decimal(value1).toFixed(),
        new Decimal(value2).toFixed(),
      ];
    }
  );

  const output = formattedOrderbook.sort((a, b) => b[0] - a[0]).slice(sortMode === 'asc' ? (-totalRecord) : 0, sortMode === 'asc' ? undefined : totalRecord)
  const max = output.slice().reduce((max, item) => parseFloat(item[2]) > parseFloat(max) ? item[2] : max, -Infinity);

  return {
    formattedOrderbook: output,
    max: max || 0,
  };
};

export const formatOrderBooks = (orderBooks, totalRecord, params) => {
  let maxBid = -Infinity;
  let maxAsk = -Infinity;

  const BuyOrder = orderBooks?.bids?.slice(0, totalRecord).map(item => {
    const price = item[0];
    const quantity = item[1];
    const total = price * quantity;
    if (total > maxBid) {
      maxBid = total;
    }
    return [price.toFixed(params?.decimal || 0), quantity.toFixed(params?.basePrecision || 0), total.toFixed(params?.quotePrecision || 0)];
  });

  const SellOrder = orderBooks?.asks?.slice(-totalRecord).map(item => {
    const price = item[0];
    const quantity = item[1];
    const total = price * quantity;
    if (total > maxAsk) {
      maxAsk = total;
    }
    return [price.toFixed(params?.decimal || 0), quantity.toFixed(params?.basePrecision || 0), total.toFixed(params?.quotePrecision || 0)];
  });
  return { BuyOrder, SellOrder, maxBid, maxAsk };
};

export const formatNumberByDecimal = (number, decimal, isDown) => {
  if (decimal >= 0) {
    const factor = Math.pow(10, decimal);
    return isDown ? (Math.floor(number * factor) / factor) : (Math.ceil(number * factor) / factor);
  } else {
    const factor = Math.pow(10, -decimal);
    return isDown ? (Math.floor(number / factor) * factor) : (Math.ceil(number / factor) * factor);
  }
};

export const fAddress = (string, length = 4) => {
  if (string) {
    if (string.length > length * 2) {
      return `${string.slice(0, length)}...${string.slice(
        string.length - length
      )}`;
    }
    return string;
  }
  return null;
};
export const HTMLConverter = (str) => {
  str = str.replace(/(<)/gi, "&lt;");
  str = str.replace(/(<)/gi, "&lg;");
  str = str.replace(/#(.+?)(?=[\s.,:,]|$)/g, "<span>#$1</span>");
  str = str.replace(/@(.+?)(?=[\s.,:,]|$)/g, "<span>@$1</span>");
  str = str.replace(
    // eslint-disable-next-line no-useless-escape
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/g,
    "<a href='$1' target='_blank' class='linked'>$1</a>",
  );
  str = str.replace(/(?:\r\n|\n\r|\r|\n)/g, "<br />");
  return str;
}

export const generateArrayWithPrecision = (precision, maxLength = 4) => {
  let result = [];
  // Generate descending powers of 10 up to the specified precision
  for (let i = precision; i > 0; i--) {
    result.push(Decimal.pow(10, -i).toFixed(i).toString())
    // result.push(Math.pow(10, -i));
  }
  // Append 0 and 10 to the array
  result.push(1);
  result.push(10);
  // Ensure the array length does not exceed 4
  return result.slice(0, maxLength);
};