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
    stage('echo 2'){
      agent {
        node {
          label "nodejs"
        }
      }
      steps{
        echo 'hello world nodejs'
        }
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

