{
  "name": "car-rental-booking-backend",
  "version": "1.0.0",
  "description": "Car rental booking backend API",
  "main": "dist/server.js",
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.2",
    "helmet": "^8.1.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.13.2",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/cors": "^2.8.17",
    "@types/express": "^5.0.1",
    "@types/jest": "^30.0.0",
    "@types/jsonwebtoken": "^9.0.9",
    "@types/morgan": "^1.9.9",
    "@types/node": "^22.14.1",
    "jest": "^30.3.0",
    "ts-jest": "^29.4.9",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.8.3"
  }
}