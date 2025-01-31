import React from "react"
import Stamp from "./stamp"

const Entry = ({ props }) => {
  return (
    <div className="bg-[#EEE] text-center rounded p-2 uppercase font-semibold text-xs tracking-wider font-mono">
      {/* <Text>Farfetch 👗👠</Text> */}
      <Stamp text="iOS Engineer" />
      <Stamp text="Jun 2017 - Present" />
    </div>
  )
}

export default Entry
