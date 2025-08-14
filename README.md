# Task Tracker

Une application de gestion de tâches avec **React (frontend)**, **Node.js/Express (backend)** et **MongoDB Atlas**, conteneurisée avec **Docker**.

---

## Fonctionnalités

- Créer, modifier et supprimer des tâches.
- Définir le **statut** (`TODO`, `IN_PROGRESS`, `DONE`) et la **priorité** (`LOW`, `MEDIUM`, `HIGH`) des tâches.
- Définir une **date d’échéance** pour chaque tâche.
- Affichage de la liste des tâches avec scroll uniquement pour les tâches.
- Application responsive et moderne.

---

## Prérequis

- [Docker](https://www.docker.com/get-started) installé sur votre machine.
- Compte [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) avec un cluster créé.
- Node.js et npm si vous voulez exécuter localement sans Docker (optionnel).

---

## Installation et exécution avec Docker

1. Cloner le projet :

```bash
git clone <URL_DU_REPO>
cd <NOM_DU_PROJET>
```
2. Créer un fichier .env pour le backend (MongoDB) :
```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.s2momym.mongodb.net/project_tracker
PORT=4000
```
3. Lancer les containers Docker :

```bash
docker-compose up --build
```
4. Accéder à l’application :
```bash
Frontend : http://localhost:3000

Backend API : http://localhost:4000/api/tasks
```
## Installation et exécution sans Docker (optionnel)
1. Backend

```bash

cd backend
npm install
npm start 
```
2. Frontend

```bash

cd frontend
npm install
npm start
```
Assurez-vous que le backend est en cours d’exécution sur http://localhost:4000.

## Structure du projet
```bash

project/
├─ backend/         # Node.js / Express
├─ frontend/        # React
├─ docker-compose.yml
├─ README.md
└─ .env             # Variables d'environnement pour le backend
```