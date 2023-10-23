pipeline {
  agent none
  stages{
    stage('echo'){
      agent {
        node {
          label "java11"
        }
      }
      environtment {
        APP = credentials("pas_name")
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

