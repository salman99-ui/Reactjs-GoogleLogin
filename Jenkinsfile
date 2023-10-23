pipeline {
  agent none
  stages{
    stage('echo'){
      environment {
        APP = credentials("pass_name")
      }
      agent {
        node {
          label "java11"
        }
      }
      steps{
        echo 'hello world'
        echo "job name : ${env.JOB_NAME}"
        echo "username ${APP_USR}"
        }
      }
     stage('echo 2'){
      agent {
        node {
          label "nodejs"
        }
      }
      steps{
        echo 'hello world node'
        }
      }
    }
  post{
    success {
      echo "yay"
    }
  }
}

