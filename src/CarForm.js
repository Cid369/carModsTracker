import React from 'react'

const CarForm = ({ handleChange, handleSubmit, car }) => (
  <form onSubmit={handleSubmit}>
    <label> Year </label>
    <input
      name="year"
      placeholder="Year"
      value={car.year}
      type="number"
      onChange={handleChange}
    />

    <label> Make </label>
    <input
      name="make"
      placeholder="Make of Vehicle"
      value={car.make}
      onChange={handleChange}

    />

    <label> Model </label>
    <input
      name="model"
      placeholder="Model"
      value={car.model}
      onChange={handleChange}
    />
    <button type="Submit">Submit</button>
  </form>
)


export default CarForm
