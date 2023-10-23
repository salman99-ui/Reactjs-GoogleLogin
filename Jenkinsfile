pipeline {
  agent none
  stages{
    stage('echo'){
      agent {
        node {
          label "java11"
        }
      }
      steps{
        echo 'hello world'
        }
      }
    }
  }
  post{
    success {
      echo "yay"
    }
  }
}

