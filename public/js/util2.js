function populateUI(value) {

  switch(true){
    case (value>=111 && value <117):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=121 && value <127):
      {
        return 'Seat number valid';
        break;
      }
    case (value>=141 && value <147):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=131 && value <137):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=161 && value <167):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=151 && value <157):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=221 && value <227):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=211 && value <217):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=241 && value <247):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=231 && value <237):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=251 && value <257):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=261 && value <267):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=311 && value <317):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=331 && value <337):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=341 && value <347):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=321 && value <327):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=361 && value <367):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=351 && value <357):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=127 && value <130):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=117 && value <120):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=137 && value <140):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=157 && value <160):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=147 && value <150):
    {
      return 'Seat number valid';
      break;
    }
    case (value>=167 && value <170):
    {
      return 'Seat number valid';
      break;
    }
    default: return 'Seat number not valid';
  }
}


try {
  module.exports = populateUI;
} catch (error) {
  console.log('we caught an error');
}
