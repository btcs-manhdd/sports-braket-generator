import { rounds } from "./interface"

export const data: {
  name: string
  total: number
  startingDate?: Date
  endingDate?: Date
  round16: rounds[]
  quarterFinals: rounds[]
  semiFinals: rounds[]
  final: rounds[]
} = {
  name: "Premier League",
  total: 16,
  round16: [
    {
      match: 1,
      team1: {
        name: "Team1",
        score: 1
      },
      team2: {
        name: "Team2",
        score: 4
      }
    },
    {
      match: 2,
      team1: {
        name: "Team3",
        score: 2
      },
      team2: {
        name: "Team4",
        score: 3
      }
    },
    {
      match: 3,
      team1: {
        name: "Team5",
        score: 1
      },
      team2: {
        name: "Team6",
        score: 7
      }
    },
    {
      match: 4,
      team1: {
        name: "Team7",
        score: 2
      },
      team2: {
        name: "Team8",
        score: 5
      }
    },
    {
      match: 5,
      team1: {
        name: "Team9",
        score: 3
      },
      team2: {
        name: "Team10",
        score: 3
      }
    },
    {
      match: 6,
      team1: {
        name: "Team11",
        score: 0
      },
      team2: {
        name: "Team12",
        score: 3
      }
    },
    {
      match: 7,
      team1: {
        name: "Team13",
        score: 5
      },
      team2: {
        name: "Team14",
        score: 5
      }
    },
    {
      match: 8,
      team1: {
        name: "Team15",
        score: 2
      },
      team2: {
        name: "Team16",
        score: 3
      }
    }
  ],
  quarterFinals: [
    {
      match: 1,
      team1: {
        name: "Team2",
        score: 1
      },
      team2: {
        name: "Team4",
        score: 3
      }
    },
    {
      match: 2,
      team1: {
        name: "Team6",
        score: 2
      },
      team2: {
        name: "Team8",
        score: 3
      }
    },
    {
      match: 3,
      team1: {
        name: "Team10",
        score: 1
      },
      team2: {
        name: "Team12",
        score: 4
      }
    },
    {
      match: 4,
      team1: {
        name: "Team14",
        score: 2
      },
      team2: {
        name: "Team16",
        score: 1
      }
    }
  ],
  semiFinals: [
    {
      match: 1,
      team1: {
        name: "Team4",
        score: 4
      },
      team2: {
        name: "Team8",
        score: 4
      }
    },
    {
      match: 2,
      team1: {
        name: "Team12",
        score: 1
      },
      team2: {
        name: "Team14",
        score: 2
      }
    }
  ],
  final: [
    {
      match: 1,
      team1: {
        name: "Team8",
        score: 0
      },
      team2: {
        name: "Team14",
        score: 4
      }
    }
  ]
}
