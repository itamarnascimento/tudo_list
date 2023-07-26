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
                bat  """ xcopy ${workspace}\\dist C:\\xampp\\htdocs\\dist /E /C /I /Q /Y """
            }
        }         
    }
}