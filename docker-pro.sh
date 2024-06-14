docker compose -f ./nginx/docker-compose.yml --build -d
docker compose -f ./backend/docker-compose.yml up --build -d mongo_pro backend_pro