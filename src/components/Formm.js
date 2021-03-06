import React from 'react'

function Formm() {
  return (
    <form class="form-horizontal" role="form">
    <div class="form-group">
       <label for="firstname" class="col-sm-2 control-label">First Name</label>
       <div class="col-sm-10">
          <input type="text" class="form-control" id="firstname" 
             placeholder="Enter First Name"/>
       </div>
    </div>
    <div class="form-group">
       <label for="lastname" class="col-sm-2 control-label">Last Name</label>
       <div class="col-sm-10">
          <input type="text" class="form-control" id="lastname" 
             placeholder="Enter Last Name"/>
       </div>
    </div>
    <div class="form-group">
       <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
             <label>
                <input type="checkbox"/> Remember me
             </label>
          </div>
       </div>
    </div>
    <div class="form-group">
       <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default">Sign in</button>
       </div>
    </div>
 </form>
   )
}

export default Formm;