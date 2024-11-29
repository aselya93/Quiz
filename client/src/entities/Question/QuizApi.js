class QuizApi{
    static async getAllQuizQuestions(){
        const response = await fetch('/api/quiz')
        const data = await response.json()
        return data

    }
}

export default QuizApi