import React, { Component } from "react";

class OtherData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let user = this.props.user;
    let street, city, zipcode;
    if (user.address.street.length === 0) street = "Enter a street";
    else street = user.address.street;

    if (user.address.city.length === 0) city = "Enter a city";
    else city = user.address.city;

    if (user.address.zipcode.length === 0) zipcode = "Enter a zipcode";
    else zipcode = user.address.zipcode;

    return (
      <div>
        Street:{" "}
        <input type="text" defaultValue={street} onChange={(e) => this.props.handleChangeStreet(e.target.value)} />{" "}
        <br />
        City: <input
          type="text"
          defaultValue={city}
          onChange={(e) => this.props.handleChangeCity(e.target.value)}
        />{" "}
        <br />
        Zip code:{" "}
        <input
          type="text"
          defaultValue={zipcode}
          onChange={(e) => this.props.handleChangeZipcode(e.target.value)}
        />{" "}
        <br />
      </div>
    );
  }
}

export default OtherData;
