docker network create development
docker compose -f ./nginx/docker-compose.yml up -d --build
docker compose -f ./backend/docker-compose.yml up --build -d mongo_pro backend_pro