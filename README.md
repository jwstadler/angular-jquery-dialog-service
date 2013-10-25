angular-jquery-dialog-service
=============================

# Overview
This service allows you to easily work with jQuery UI dialogs from Angular.js.

# Methods
The service exposes the following methods for controlling the dialogs.

## open(id, config)
The open method displays a dialog. 

`id`
The `id` argument si just a unique name to identify this dialog when calling other methods on
the service such as close and cancel. 

`config`
The `config` argument is a javascript object that configures the dialog. It sets the template, the dialog's data, and the options for the dialog.

```javascript
{
	template: [required - Script block's id value]
	model:    [optional - Javascript object to pass the dialog exposed as $scope.model to the controller]
	options:  [required - Javascript object containing the jquery-ui dialog parameters passed ot the dialog (http://api.jqueryui.com/dialog) ]
}
```

The dialog template must be stored as an angular template using the following syntax:

```html
<script type="text/ng-template" id="dialogTemplate.html">

  <!-- Controller for Dialog -->
  <div ng-controller="dialogCtrl">

  	<!-- The form -->
    First Name<br>
    <input type="text" ng-model="model.firstName" /><br>
    Last Name<br>
    <input type="text" ng-model="model.lastName" /><br>

    <!-- The buttons -->
    <button ng-click="cancelClick()">Cancel</button>
    <button ng-click="saveClick()">Save</button>
    <button ng-click="confirmClick()">Confirm</button>
  </div>
</script>
```

In the case above, `config.template` would be set to `dialogTemplate.html`.

The open method returns a promise that is resolved when the user closes the dialog. If 
the user calls close on the dialog, the argument passed to close will be passed to the 
success function in the then. If cancel was called or the user clicks on the X or hits 
ESC, the error function will be called with no arguments.


## close()

## cancel()
