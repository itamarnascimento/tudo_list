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
                bat 'xcopy  cd ${workspace}/dist C:/xampp8/htdocs/dist /E /I /H'
            }
        }         
    }
}