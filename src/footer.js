import React from 'react'

const Footer = ({ item,checkCount,onhandlePacked }) => {
  const numItems = item.length;

  const numPacked = item.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / numItems) * 100);

  if (!numItems) {
    return (
      <p className="stats">
        <em> start adding items to your list!!!</em>
      </p>
    )
  }
  return (
    <div className="stats">
      <footer>
        {packedPercentage === 100 ? "you packed everything! Ready to go!!" : `you have ${numItems} items on your list, and you already packed ${numPacked}(${packedPercentage}%)`}
      </footer>
    </div>

  )
}

export default Footer;