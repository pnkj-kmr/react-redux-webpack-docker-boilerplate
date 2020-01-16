FROM node:9.10.1
ENV NPM_CONFIG_LOGLEVEL warn
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY start.sh /app/
ADD . /app/
RUN ["chmod", "+x", "start.sh"]
CMD ["sh", "-c", "./start.sh"]
