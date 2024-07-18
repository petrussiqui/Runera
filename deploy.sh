WEBSITE_BUCKET=tonetapp.co
DISTRIBUTION_ID=E2OEYZOB9SSXK1
GREEN='\033[1;32m'
NC='\033[0m'

echo "${GREEN}Deploying to $WEBSITE_BUCKET${NC}..."

echo "${GREEN}Installing dependencies...${NC}"
yarn install --frozen-lockfile

echo "${GREEN}Building...${NC}"
yarn build

echo "${GREEN}Uploading to S3...${NC}"
aws s3 cp build/ s3://$WEBSITE_BUCKET/ --recursive --acl public-read

echo "${GREEN}Invalidating CloudFront cache...${NC}"
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"


echo "${GREEN}Done.${NC}"