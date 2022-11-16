function updateStatistics(operation, piece) {
  console.log(pieces[piece])
  statistics.forEach(element => {
    console.log(element.dataset.statistic)
    console.log(operation)
    if (operation === '-') {
      element.textContent =
        parseInt(element.textContent) - pieces[piece][element.dataset.statistic]
    }

    if (operation === '+') {
      element.textContent =
        parseInt(element.textContent) + pieces[piece][element.dataset.statistic]
    }
  })
}

function controlAdjustment(operation, control, robotPiece) {
  const pieceControl = control.querySelector('[data-counter]')

  if (operation === '-') {
    if (parseInt(pieceControl.value) === 0) {
      return
    }
    pieceControl.value = parseInt(pieceControl.value) - 1
  }
  if (operation === '+') {
    pieceControl.value = parseInt(pieceControl.value) + 1
  }

  if (pieceControl.value.length < 2) {
    pieceControl.value = `0${parseInt(pieceControl.value)}`
  }

  updateStatistics(operation, robotPiece)
}

const controls = document.querySelectorAll('[data-control]')
const statistics = document.querySelectorAll('[data-statistic]')
const pieces = {
  arms: {
    strength: 29,
    power: 35,
    energy: -21,
    speed: -5
  },

  armor: {
    strength: 41,
    power: 20,
    energy: 0,
    speed: -20
  },
  cores: {
    strength: 0,
    power: 7,
    energy: 48,
    speed: -24
  },
  legs: {
    strength: 27,
    power: 21,
    energy: -32,
    speed: 42
  },
  rockets: {
    strength: 0,
    power: 28,
    energy: 0,
    speed: -2
  }
}

controls.forEach(element => {
  element.addEventListener('click', e => {
    controlAdjustment(
      e.target.dataset.control,
      e.target.parentNode,
      e.target.dataset.piece
    )
  })
})
