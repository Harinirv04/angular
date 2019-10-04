pipeline {
  agent any
  stages {
    stage('changing Environment') {
      steps {
         sh label: '', script: 'sed -i "s/USE_URL: \'\\(.*\\)\'/USE_URL: \'DEV\'/g" ./src/app/app.config.ts'
         echo 'Environment - development'
      }
    }
    stage('Build Angular') {
      steps {
        echo 'Building Angular'
       
        echo 'Build Complete'
      }
    }
    stage('Moving build files') {
      steps {
        echo 'Moving build files to Server'
       
      }
    }
    stage('Build Success') {
      steps {
        echo 'Sucessfully build - Master env'
      }
    }
  }
}
