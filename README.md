# Fumero Website — Istruzioni Setup

## Struttura file React

```
fumero-frontend/
├── src/
│   ├── main.jsx               ← già generato da Vite (aggiungere import './index.css')
│   ├── App.jsx                ← entry point componenti
│   ├── index.css              ← variabili globali e stili base
│   ├── assets/
│   │   ├── foto-dottore.jpg   ← foto dottore in sala operatoria
│   │   ├── foto-op1.jpg       ← foto intervento 1
│   │   ├── foto-op2.jpg       ← foto intervento 2
│   │   └── foto-op3.jpg       ← foto intervento 3
│   ├── data/
│   │   ├── cliniche.json
│   │   ├── pubblicazioni.json
│   │   └── listino.json
│   └── components/
│       ├── Navbar.jsx + Navbar.css
│       ├── Hero.jsx + Hero.css
│       ├── Specializzazioni.jsx + Specializzazioni.css
│       ├── Galleria.jsx + Galleria.css
│       ├── Ricovero.jsx + Ricovero.css
│       ├── Carriera.jsx + Carriera.css
│       ├── Pubblicazioni.jsx + Pubblicazioni.css
│       ├── Televisita.jsx + Televisita.css
│       ├── Cliniche.jsx + Cliniche.css
│       ├── Contatti.jsx + Contatti.css
│       └── Footer.jsx + Footer.css
```

## Setup foto

1. Copia le 4 foto in `src/assets/` con questi nomi esatti:
   - `foto-dottore.jpg`  (quella del dottore in sala operatoria con braccia conserte)
   - `foto-op1.jpg`
   - `foto-op2.jpg`
   - `foto-op3.jpg`

## Da completare prima del go-live

- [ ] IBAN reale in `Televisita.jsx` (cercare `IT00 X000...`)
- [ ] Testi specializzazioni in `Specializzazioni.jsx` (cercare `[TESTO DA FORNIRE`)
- [ ] Testi ricovero in `Ricovero.jsx` (cercare `[TESTO DA FORNIRE`)
- [ ] Prezzi in `listino.json`
- [ ] P.IVA in `Footer.jsx`
- [ ] Link Google Meet fisso in `AppointmentRequest.java` backend
- [ ] Credenziali Brevo in `application.properties`

## Backend Spring Boot

File da mettere in `src/main/java/com/fumero/`:
- `controller/ContactController.java`
- `service/MailService.java`
- `model/ContactRequest.java`
- `config/CorsConfig.java`

File da mettere in `src/main/resources/`:
- `application.properties`

## Avviare in sviluppo

```bash
# Backend
cd fumero-backend
./mvnw spring-boot:run

# Frontend (altra finestra terminale)
cd fumero-frontend
npm run dev
```

Frontend: http://localhost:5173
Backend:  http://localhost:8080
