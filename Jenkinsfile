pipeline {
  agent any
  stages {
    stage('changing Environment') {
      steps {
         sh label: '', script: 'sed -i "s/USE_URL: \'\\(.*\\)\'/USE_URL: \'PRODUCTION\'/g" ./src/app/app.config.ts'
         echo 'Environment - production'
      }
    }
    stage('Build Angular') {
      steps {
        sh 'rm -rf ./node_modules'
        sh 'npm install'
        echo 'Building Angular.....'
        sh 'ng build --prod --base-href ./'
        echo 'Build Complete'
      }
    }
    stage('Moving build files') {
      steps {
        echo 'Moving build files to Local'
       
      }
    }
    stage('Build Success') {
      steps {
        echo 'Sucessfully build - prod env'
      }
    }
  }
}
