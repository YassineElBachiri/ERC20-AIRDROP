export const contractAddress =  "0x5FbDB2315678afecb367f032d93F642f64180aa3"
export const contractAbi =  [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "allEductationDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "degree",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "knowledgeAcquired",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "instutionName",
            "type": "string"
          }
        ],
        "internalType": "struct Portfolio.Education[3]",
        "name": "",
        "type": "tuple[3]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "allExperienceDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "post",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "knowledgeAcquired",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "compamyName",
            "type": "string"
          }
        ],
        "internalType": "struct Portfolio.Experience[3]",
        "name": "",
        "type": "tuple[3]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "allProjects",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "image",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "githubLink",
            "type": "string"
          }
        ],
        "internalType": "struct Portfolio.Project[3]",
        "name": "",
        "type": "tuple[3]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      }
    ],
    "name": "changeDescription",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_degree",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_knowledgeAcquired",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_instutionName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_educationDetailCount",
        "type": "uint256"
      }
    ],
    "name": "changeEducation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_post",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_knowledgeAcquired",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_companyName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_experienceDetailCount",
        "type": "uint256"
      }
    ],
    "name": "changeExperience",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_imageLink",
        "type": "string"
      }
    ],
    "name": "changeImageLink",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_image",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_githubLink",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_projectCount",
        "type": "uint256"
      }
    ],
    "name": "changeProject",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_resumeLink",
        "type": "string"
      }
    ],
    "name": "changeResumeLink",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "description",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "donate",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "educationDetails",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "degree",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "knowledgeAcquired",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "instutionName",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "experienceDetails",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "post",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "knowledgeAcquired",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "compamyName",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "imageLink",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_degree",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_knowledgeAcquired",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_instutionName",
        "type": "string"
      }
    ],
    "name": "insertEducation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_post",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_knowledgeAcquired",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_companyName",
        "type": "string"
      }
    ],
    "name": "insertExperience",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_image",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_githubLink",
        "type": "string"
      }
    ],
    "name": "insertProject",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "manager",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "projects",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "image",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "githubLink",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "resumeLink",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
