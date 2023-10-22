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
        for(int i = 0 ; i < 4 ; i++){
          echo "ke ${i}"
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

