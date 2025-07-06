# 🔁 Redis Job Queue System with Node.js & Docker

A simple, production-style **job queue system** built using **Redis**, **Node.js**, and **Docker Compose**.

It demonstrates a basic **producer-consumer** architecture where:
- A **Publisher (API)** pushes jobs to a Redis queue.
- **Two Worker services** consume and process jobs from the queue using `BRPOP`.
- All services run as **Docker containers**, connected via a shared network.

---

## 🚀 Features

- ⚙️ Redis-backed message queue
- 🧱 Publisher-Worker separation (loosely coupled)
- 🐳 Dockerized microservice setup with Docker Compose
- ♻️ Concurrent job processing by multiple workers
- 🔌 REST API for pushing jobs

---


## 🛠️ Tech Stack

- **Node.js** – Publisher and Worker services
- **Redis** – Queue store using lists and blocking pop
- **Docker & Docker Compose** – Service orchestration

---

## 📦 How to Run

### 1. Clone the repository
```bash
git clone https://github.com/radheyyyyyy/redis-docker.git
cd redis-docker
docker-compose up --build
```
### Use Postman or curl given below:
```
curl -X POST http://localhost:3000/ \
-H "Content-Type: application/json" \
-d '{"email":"test@example.com", "pass":"1234"}'
```
