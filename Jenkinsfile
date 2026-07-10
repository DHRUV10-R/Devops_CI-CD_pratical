pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Show Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Check Website Files') {
            steps {
                bat '''
                if exist index.html (
                    echo index.html Found
                ) else (
                    echo index.html Missing
                    exit /b 1
                )
                '''
            }
        }

        stage('Build Complete') {
            steps {
                echo 'HTML/CSS/JS project verified successfully.'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
        always {
            echo 'Pipeline execution finished.'
        }
    }
}
