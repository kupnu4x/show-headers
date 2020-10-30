FROM node

COPY 1.js /1.js

EXPOSE 3000

CMD node 1.js