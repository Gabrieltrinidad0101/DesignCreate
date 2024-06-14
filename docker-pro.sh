docker compose -f ./backend/docker-compose.yml up backend_pro mongo_pro -d --build
docker compose -f ./nginx/docker-compose.yml -d --build