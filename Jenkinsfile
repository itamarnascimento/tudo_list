pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') { 
            steps {
                bat """
                cd ${workspace}
                npm install"""
                bat """
                cd ${workspace}
                npm run build"""
            }
        }
        stage('Copiar'){
            steps {
                bat  """ Robocopy ${workspace}\\dist C:\\xampp8\\htdocs\\dist /E /R:3 /IS /S > NUL """
            }
        }         
    }
}