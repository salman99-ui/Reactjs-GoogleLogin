pipeline {
  agent none
  environment{
    AUTHOR = 'Joko Sanstoso'
  }
  stages{
    stage('echo'){
      agent {
        node {
          label "java11"
        }
      }
      steps{
        echo 'hello world'
        echo "job name : ${env.JOB_NAME}"
        echo "Author name : ${AUTHOR}"
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

