pipeline {
  agent any
  stages {
    stage('Build Angular') {
      steps {
        echo 'Building Angular'
        sh 'rm -rf ./node_modules'
        sh 'npm install'
        sh '''chmod -R 0777 deploy
npm run deploy_jenkins DEPLOY'''
        sh '''node --max_old_space_size=5048 ./node_modules/@angular/cli/bin/ng build --prod --base-href ./
'''
        echo 'Build Complete'
      }
    }
    stage('Moving build files') {
      steps {
        echo 'Moving build files to Server'
        sh 'npm run move_build sakthi 192.168.1.125 /var/www/html/p2e /home/vedant/pem_files/c1s/deploy/id_rsa.pem'
      }
    }
    stage('Build Success') {
      steps {
        emailext(subject: 'Build Complete', body: 'Hi, A new build has been updated for testing in the local server.', from: 'noreply.c1s@ionixxtech.com', to: 'vedant.lakshminarayanan@ionixxtech.com', replyTo: 'vedant.lakshminarayanan@ionixxtech.com', attachLog: true)
      }
    }
    stage('CHANGELOG and Cleanup') {
      steps {
        sh '''echo "Generating CHANGELOG"
npm run release
'''
        sshagent(credentials: ['bitbucket_ssh']) {
          sh '''git checkout feature/testing
git push origin feature/testing --follow-tags'''
        }

        sh 'rm -rf ./node_modules'
        sh 'pwd'
      }
    }
  }
}
