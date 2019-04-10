FROM node:11.6.0

ENV NPM_CONFIG_LOGLEVEL warn

# Install and configure `serve`.
RUN npm install -g serve
CMD serve -s build -l 3000
EXPOSE 3000

# Copy all local files into the image.
COPY . .
RUN npm install

# Build for production.
RUN npm run build --production
