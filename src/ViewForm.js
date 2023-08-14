import React from "react";
import {Link} from 'react-router-dom'

function ViewForm() {
  return (
    <div>
      <button type="button" className="btn btn-primary">
        +Create
      </button>

      <table>
        <tr>
   
          <th>Team</th>
          <th>Run Rate</th>
          <th>Win</th>
          <th>Lose</th>
         
        </tr>

        <tr>
         
          <td>csk</td>
          <td>0.125</td>
          <td>5</td>
          <td>5</td>
          <td>
            <Link>
              <button type="button" className="btn btn-success">
                Edit
              </button>
            </Link>
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>

        {/* ) */}

        {/* })} */}
      </table>
    </div>
  );
}

export default ViewForm;
