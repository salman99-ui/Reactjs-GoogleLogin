pipeline {
  agent none
  parameters {
    choice(name:"Deploy" , choices : ['Dev','Staging','Prod'] , description : 'Where to deploy')
  }
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
        echo "Deploy to ${params.Deploy}"
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

