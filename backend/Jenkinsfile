pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Nischal-Budhathoki/kailashHotel'
            }
        }

        stage('Install') {
            steps {
                sh 'bash scripts/install.sh'
            }
        }

        stage('Test') {
            steps {
                sh 'bash scripts/test.sh'
            }
        }

        stage('Build') {
            steps {
                sh 'bash scripts/build.sh'
            }
        }

        stage('Migrate DB') {
            steps {
                sh 'bash scripts/migrate.sh'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t kailashHotel:latest .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'bash scripts/deploy.sh'
            }
        }
    }
}