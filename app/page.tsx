import Link from "next/link";


export default function Home() {
  return (
       <>
          <div className="bg-secondary">
            <div className="flex flex-col items-center justify-center w-full min-h-screen">
              <div className="flex flex-col items-center justify-center w-full max-w-2xl px-4 py-8 space-y-4 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-primary">
                  Quiz App
                </h1>
                <p className="text-lg text-center text-primary">
                It&apos;s a quiz about the environment and climate change.
                You have to answer 10 questions and at the end you will be given a score which will define your level.
                </p>
                {/*A button to start quiz and go to the page Quiz*/}
                <button className="w-[49%] py-2 rounded-lg hover:bg-azure rounded-lg bg-blue">
                  <Link href="/quiz" className="text-primary animate-pulse">Start Quiz</Link>
                </button>
              </div>
          </div>
        </div>
       </>
  )
}
