pipeline {
  agent {
    node {
      label "java11"
    }
  }
  stages{
    stage('echo'){
      steps{
        echo 'hello world'
      }
    }
  }
  post{
    success {
      echo "yay"
    }
  }
}

