# base node image
FROM node:16-bullseye-slim as base

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl

# Install all node_modules, including dev dependencies
FROM base as deps

RUN mkdir /app
WORKDIR /app

ADD package.json package-lock.json ./
RUN npm install --production=false

# Setup production node_modules
FROM base as production-deps

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json package-lock.json ./
RUN npm prune --production

# Build the app
FROM base as build

ENV NODE_ENV=production
ENV DATABASE_URL="mysql://4du3bfddacrszheltxjf:pscale_pw_UOCRf1616BhRVH0371khucJawQ7oQrTiTDVzqLkwmKN@aws.connect.psdb.cloud/adminpanel?sslaccept=strict"
ENV SESSION_SECRET="9ff5613cab52b39eb6d2feaa1f69f724"

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

# If we're using Prisma, uncomment to cache the prisma schema
# ADD prisma .
# RUN npx prisma generate

ADD . .
RUN npm run build

# Finally, build the production image with minimal footprint
FROM base

ENV NODE_ENV=production
ENV DATABASE_URL="mysql://qo43btswewelx6220fzk:pscale_pw_Ime7lCWYv53EqdEFgJc1pm0zW39qgzzRmdjfw8lgIMP@aws.connect.psdb.cloud/adminpanel?sslaccept=strict"
ENV SESSION_SECRET="9ff5613cab52b39eb6d2feaa1f69f724"

RUN mkdir /app
WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules

# Uncomment if using Prisma
# COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma

COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
ADD . .

CMD ["npm", "run", "start"]
