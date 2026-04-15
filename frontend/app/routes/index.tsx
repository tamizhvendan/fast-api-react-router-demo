import { Link } from "react-router";

export default function () {
  return (
    <ul>
      <li><Link to="/vendors">Vendors</Link></li>
      <li><Link to="/customers">Customers</Link></li>
    </ul>
  )
}