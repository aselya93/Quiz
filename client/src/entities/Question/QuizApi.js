class QuizApi{
    static async getAllQuizQuestions(){
        const response = await fetch('/api/quiz')
        return await response.json()

    }
}

export default QuizApi