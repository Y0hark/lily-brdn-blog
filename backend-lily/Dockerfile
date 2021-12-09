FROM strapi/base

ENV NODE_ENV production

WORKDIR /backend-lily

COPY package.json .

RUN npm install -frozen-lockfile

COPY favicon.ico .

COPY api/ api/

COPY config/ config/

COPY components/ components/

COPY extensions/ extensions/

RUN npm run build

CMD ["npm", "start"]