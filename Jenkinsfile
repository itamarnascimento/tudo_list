pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') { 
            steps {
                bat """
                cd ${workspace}\\web
                npm install"""
                bat """
                cd ${workspace}\\web
                npx next build"""
            }
        }         
    }
}