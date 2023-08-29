# Quiz


## Introduction
Il quiz che ho creato permette di rispondere a 10 domande sull'ambiente e sul cambiamento climatico. 
Dopo aver risposto a 10 domande un utente riceverà il punteggio e potrà ripetere il quiz.

## Technologies Used
- Next.js
- React.js 
- TailwindCSS 
- Typescript
- React Hooks

## Project development
1) Ho creato la pagina iniziale del progetto `app/page.tsx` in cui spiego brevemente cosa rigurada il quiz e ho inserito un pulsante per iniziare il quiz.
2) Ho creato un file nella cartella `interfaces/page.tsx` in cui ho inserito le interfacce per le domande e le risposte.
3) In `app/quiz/page.tsx` ho creato il file che gestisce le domande e le risposte del quiz con relativo punteggio e alla fine viene mostrata una schermata con il punteggio ottenuto ed un pulsante che permette all'utente di riprovarlo.
4) In `pages/api/questions.json`  ho inserito le domande e le risposte del quiz che vengono estrapolate nel file `app/quiz/page.tsx` per essere utilizzate. 

## How to run the project in local
1) Clonare il progetto da GitHub con il comando `git clone ...`  oppure estrarre il file zip e successivamente aprire il terminale nella cartella del progetto e passare al punto 3.
2) Entrare nella cartella del progetto con il comando `cd quiz`
3) Installare le dipendenze con il comando `npm install` o `yarn`
4) Avviare il progetto con il comando `npm run dev` o `yarn dev`

## Link to the project
[Quiz-App](https://github.com/pierre1590/Quiz-App)

## Author
- [Piero Sabino](https://github.com/pierre1590/pierre1590)
- [Website](https://www.pierosabino.it/)
