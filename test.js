var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c('el-col', {
    directives: [{
      name: 'loading',
      rawName: 'v-loading',
      value: (_vm.loading),
      expression: 'loading'
    }], staticClass: 'tree-main'
  }, [(_vm.showExtent) ? _c('el-row', { staticClass: 'tree-head tree-head__sticky' }, [_c('span', {
    directives: [{
      name: 'show',
      rawName: 'v-show',
      value: (this.dataInfo.authType !== 'link'),
      expression: 'this.dataInfo.authType!==\'link\''
    }], staticStyle: { 'float': 'left', 'padding-left': '10px' }
  }, [_vm._v(_vm._s(_vm.dataInfo.head))]), _vm._v(' '), _c('span', {
    directives: [{
      name: 'show',
      rawName: 'v-show',
      value: (this.dataInfo.authType === 'link'),
      expression: 'this.dataInfo.authType===\'link\''
    }], staticStyle: { 'float': 'left', 'padding-left': '10px' }
  }, [_c('el-select', {
    ref: 'datasourceInput',
    staticClass: 'datasource-select',
    attrs: { 'placeholder': _vm.$t('commons.please_select') },
    on: { 'change': _vm.datasourceSelect },
    model: {
      value: (_vm.currentDatasourceType), callback: function($$v) {
        _vm.currentDatasourceType = $$v
      }, expression: 'currentDatasourceType'
    }
  }, _vm._l((_vm.datasourceTypes), function(item) {
    return _c('el-option', {
      key: item.type,
      attrs: { 'label': item.name, 'value': item.type }
    }, [_c('span', [_c('span', { staticStyle: { 'float': 'left' } }, [_vm._v(_vm._s(item.name))]), _vm._v(' '), _c('span', { staticStyle: { 'width': '50px' } }, [_vm._v('     ')]), _vm._v(' '), _c('span', {
      directives: [{
        name: 'show',
        rawName: 'v-show',
        value: (_vm.currentDatasourceType === item.type),
        expression: 'currentDatasourceType===item.type'
      }], staticStyle: { 'float': 'right' }
    }, [_c('i', { staticClass: 'el-icon-check', staticStyle: { 'font-weight': 'bold' } })])])])
  }), 1)], 1), _vm._v(' '), _vm._l((_vm.defaultAuthDetails), function(auth) {
    return _c('span', {
      key: auth.privilegeName,
      staticClass: 'auth-span'
    }, [_vm._v('\n      ' + _vm._s(auth.privilegeName) + '\n    ')])
  })], 2) : _vm._e(), _vm._v(' '), _c('el-row', {
    staticClass: 'tree-auth',
    staticStyle: { 'margin-top': '1px' }
  }, [_c('el-tree', {
    attrs: {
      'props': _vm.defaultProps,
      'load': _vm.loadNodes,
      'data': _vm.treeData,
      'node-key': _vm.defaultProps.id,
      'highlight-current': _vm.highlightCurrent,
      'default-expanded-keys': _vm.expandedKey,
      'lazy': ''
    }, on: { 'node-click': _vm.nodeClick }, scopedSlots: _vm._u([{
      key: 'default', fn: function(ref) {
        var node = ref.node
        var data = ref.data
        return _c('span', { staticClass: 'custom-tree-node' }, [(data.nodeType === 'spine' && data.modelType !== 'dept' && data.modelType !== 'menu') ? _c('span', [_c('i', { staticClass: 'el-icon-folder' })]) : _vm._e(), _vm._v(' '), (data.nodeType === 'leaf') ? _c('span', [(data.modelType === 'dataset') ? _c('svg-icon', {
          class: 'ds-icon-' + data.modelInnerType,
          attrs: { 'icon-class': 'ds-' + data.modelInnerType }
        }) : _vm._e(), _vm._v(' '), (data.modelType === 'panel') ? _c('svg-icon', {
          staticClass: 'ds-icon-scene',
          attrs: { 'icon-class': 'panel-publish' }
        }) : _vm._e(), _vm._v(' '), (data.modelType === 'link') ? _c('svg-icon', {
          staticClass: 'ds-icon-scene',
          attrs: { 'icon-class': 'datasource' }
        }) : _vm._e()], 1) : _vm._e(), _vm._v(' '), _c('span', { staticClass: 'auth-span-father' }, [_c('span', {
          staticClass: 'auth-span-inner',
          domProps: { 'innerHTML': _vm._s(data.name) }
        })]), _vm._v(' '), (_vm.showExtent) ? _c('span', {
          on: {
            'click': function($event) {
              $event.stopPropagation()
            }
          }
        }, [(_vm.authDetails[data.id]) ? _c('div', _vm._l((_vm.authDetails[data.id]), function(auth) {
          return _c('span', {
            key: auth.privilegeType,
            staticClass: 'auth-span'
          }, [_c('span', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: (auth.privilegeType !== 20),
              expression: 'auth.privilegeType !== 20'
            }]
          }, [(auth.privilegeValue === 1) ? _c('a', {
            attrs: { 'href': 'javascript:;' },
            on: {
              'click': function($event) {
                return _vm.clickAuth(data.id, auth)
              }
            }
          }, [_c('svg-icon', { attrs: { 'icon-class': 'lock_open' } })], 1) : (auth.privilegeValue === 0 && auth.extPrivilegeValue > 0) ? _c('span', { attrs: { 'href': 'javascript:;' } }, [_c('el-tooltip', {
            staticClass: 'item',
            attrs: { 'effect': 'dark', 'placement': 'top' }
          }, [_c('div', {
            attrs: { 'slot': 'content' },
            slot: 'content'
          }, [_c('span', [_vm._v(_vm._s(_vm.$t('auth.auth_extent_tips')))]), _c('br'), _vm._v(' '), _c('span', { domProps: { 'innerHTML': _vm._s(_vm.getExtentNamesDom(auth.extTargetNames)) } }), _vm._v(' '), _c('span', { staticClass: 'target_name_tips' }, [_c('span', { staticClass: 'target_name_tips_al' }, [_vm._v(_vm._s(_vm.$t('auth.separate_auth')))]), _vm._v(' '), _c('svg-icon', {
            staticClass: 'separate_auth_svg',
            attrs: { 'icon-class': 'lock_closed_switch' },
            on: {
              'click': function($event) {
                return _vm.clickAuth(data.id, auth)
              }
            }
          })], 1)]), _vm._v(' '), _c('svg-icon', { attrs: { 'icon-class': 'lock_other_open' } })], 1)], 1) : _c('a', {
            attrs: { 'href': 'javascript:;' },
            on: {
              'click': function($event) {
                return _vm.clickAuth(data.id, auth)
              }
            }
          }, [_c('svg-icon', { attrs: { 'icon-class': 'lock_closed' } })], 1)]), _vm._v(' '), _c('el-button', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: (auth.privilegeType === 20 && (('source' !== _vm.direction && data.modelInnerType !== 'group') || ('source' === _vm.direction && _vm.authCondition.modelInnerType !== 'group')) && auth.privilegeValue === 1),
              expression: 'auth.privilegeType === 20 && ((\'source\'!==direction&&data.modelInnerType !== \'group\') || (\'source\'===direction && authCondition.modelInnerType !== \'group\') ) && auth.privilegeValue === 1'
            }],
            attrs: { 'size': 'mini', 'circle': '', 'type': 'text', 'icon': 'el-icon-edit' },
            on: {
              'click': function($event) {
                return _vm.showRowPermission(auth, data.name)
              }
            }
          }), _vm._v(' '), _c('div', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: (auth.privilegeType === 20 && (('source' !== _vm.direction && data.modelInnerType !== 'group') || ('source' === _vm.direction && _vm.authCondition.modelInnerType !== 'group')) && auth.privilegeValue !== 1),
              expression: 'auth.privilegeType === 20 && ((\'source\'!==direction&&data.modelInnerType !== \'group\') || (\'source\'===direction && authCondition.modelInnerType !== \'group\')) && auth.privilegeValue !== 1'
            }]
          }, [_vm._v('  ')]), _vm._v(' '), _c('div', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: (auth.privilegeType === 20 && (('source' !== _vm.direction && data.modelInnerType === 'group') || ('source' === _vm.direction && _vm.authCondition.modelInnerType === 'group'))),
              expression: 'auth.privilegeType === 20 && ((\'source\'!==direction&&data.modelInnerType === \'group\')||  (\'source\'===direction && authCondition.modelInnerType === \'group\'))'
            }]
          }, [_vm._v('  ')])], 1)
        }), 0) : _c('div', _vm._l((_vm.defaultAuthDetails), function(auth) {
          return _c('span', {
            key: auth.privilegeType,
            staticClass: 'auth-span'
          }, [_c('a', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: (auth.privilegeType !== 20),
              expression: 'auth.privilegeType !== 20'
            }], attrs: { 'href': 'javascript:;' }, on: {
              'click': function($event) {
                return _vm.clickAuth(data.id, auth)
              }
            }
          }, [_c('svg-icon', { attrs: { 'icon-class': auth.privilegeValue === 1 ? 'lock_open' : 'lock_closed' } })], 1), _vm._v(' '), _c('div', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: (auth.privilegeType === 20),
              expression: 'auth.privilegeType === 20'
            }]
          }, [_vm._v('  ')])])
        }), 0)]) : _vm._e()])
      }
    }])
  })], 1), _vm._v(' '), _c('el-drawer', {
    directives: [{
      name: 'closePress',
      rawName: 'v-closePress'
    }, {
      name: 'loading',
      rawName: 'v-loading',
      value: (_vm.loadingRowPermission),
      expression: 'loadingRowPermission'
    }],
    attrs: {
      'title': ('【' + _vm.datesetLabel + '】' + (_vm.$t('auth.row_column'))),
      'custom-class': 'row-column-permissions',
      'append-to-body': '',
      'wrapperClosable': false,
      'size': 896,
      'visible': _vm.show_row_column_permission,
      'direction': 'rtl',
      'before-close': _vm.clearData
    },
    on: {
      'update:visible': function($event) {
        _vm.show_row_column_permission = $event
      }
    }
  }, [_c('el-tabs', {
    on: { 'tab-click': _vm.handleClickTabs },
    model: {
      value: (_vm.datasetPermissionsTabActive), callback: function($$v) {
        _vm.datasetPermissionsTabActive = $$v
      }, expression: 'datasetPermissionsTabActive'
    }
  }, [_c('el-tab-pane', {
    attrs: {
      'label': _vm.$t('dataset.row_permissions'),
      'name': 'RowPermissions'
    }
  }), _vm._v(' '), _c('el-tab-pane', {
    attrs: {
      'label': _vm.$t('dataset.column_permissions'),
      'name': 'ColumnPermissions'
    }
  })], 1), _vm._v(' '), _c('div', { staticClass: 'row-rules between' }, [_c('span', [_vm._v(_vm._s(_vm.datasetPermissionsTabActive === 'RowPermissions'
    ? _vm.$t('auth.row_permission')
    : _vm.$t('auth.column_permission')))]), _vm._v(' '), (_vm.datasetPermissionsTabActive === 'RowPermissions') ? _c('el-switch', {
    attrs: {
      'active-text': _vm.activeText,
      'inactive-color': '#BBBFC4'
    }, model: {
      value: (_vm.defaultForm.enable), callback: function($$v) {
        _vm.$set(_vm.defaultForm, 'enable', $$v)
      }, expression: 'defaultForm.enable'
    }
  }) : _c('el-switch', {
    attrs: { 'active-text': _vm.activeText, 'inactive-color': '#BBBFC4' },
    model: {
      value: (_vm.columnPermissionForm.permissions.enable), callback: function($$v) {
        _vm.$set(_vm.columnPermissionForm.permissions, 'enable', $$v)
      }, expression: 'columnPermissionForm.permissions.enable'
    }
  })], 1), _vm._v(' '), _c('div', {
    directives: [{
      name: 'show',
      rawName: 'v-show',
      value: (
        _vm.datasetPermissionsTabActive === 'RowPermissions' &&
        _vm.show_row_column_permission
      ),
      expression: '\n        datasetPermissionsTabActive === \'RowPermissions\' &&\n        show_row_column_permission\n      '
    }], staticClass: 'relation-tree-container'
  }, [_c('rowAuth', {
    ref: 'rowAuth',
    on: { 'execute-axios': _vm.executeAxios, 'save': _vm.save }
  })], 1), _vm._v(' '), _c('div', {
    directives: [{
      name: 'show',
      rawName: 'v-show',
      value: (_vm.datasetPermissionsTabActive === 'ColumnPermissions' && _vm.show_row_column_permission),
      expression: 'datasetPermissionsTabActive === \'ColumnPermissions\' && show_row_column_permission'
    }], staticClass: 'mrbt40'
  }, [_c('div', {
    staticClass: 'border-left',
    class: [{ 'border-none': !_vm.curCol.id }]
  }, [_c('el-input', {
    staticClass: 'name-email-search',
    attrs: {
      'placeholder': _vm.$t('auth.search_by_field'),
      'prefix-icon': 'el-icon-search',
      'size': 'small',
      'clearable': ''
    },
    model: {
      value: (_vm.colKeywords), callback: function($$v) {
        _vm.colKeywords = $$v
      }, expression: 'colKeywords'
    }
  }), _vm._v(' '), _c('el-checkbox', {
    attrs: { 'indeterminate': _vm.isIndeterminate },
    on: { 'change': _vm.handleCheckAllChange },
    model: {
      value: (_vm.checkAll), callback: function($$v) {
        _vm.checkAll = $$v
      }, expression: 'checkAll'
    }
  }, [_vm._v(_vm._s(_vm.$t('dataset.check_all')) + '\n        ')]), _vm._v(' '), _c('div', { staticStyle: { 'margin-top': '12px' } }), _vm._v(' '), _c('el-checkbox-group', {
    on: { 'change': _vm.handleSelectionFiledChange },
    model: {
      value: (_vm.selectedId), callback: function($$v) {
        _vm.selectedId = $$v
      }, expression: 'selectedId'
    }
  }, [_vm._l((_vm.tableData), function(ele) {
    return [_c('div', {
      key: ele.id,
      class: [{ 'is-active': _vm.curCol.id === ele.id }],
      on: {
        'click': function($event) {
          return _vm.selectCur(ele)
        }
      }
    }, [_c('el-checkbox', { attrs: { 'label': ele.id } }, [_c('svg-icon', {
      class: ('field-icon-' + (_vm.fieldEnum[ele.deType])),
      attrs: { 'icon-class': ('field_' + (_vm.fieldEnum[ele.deType])) }
    }), _vm._v('\n                ' + _vm._s(ele.name) + '\n              ')], 1)], 1), _vm._v(' '), _c('div', {
      key: ele.name,
      staticStyle: { 'margin-top': '12px' }
    })]
  })], 2)], 1), _vm._v(' '), (!!_vm.curCol.id) ? _c('div', { staticClass: 'border-right' }, [_c('el-form', { attrs: { 'label-width': '80px' } }, [_c('el-form-item', { attrs: { 'label': _vm.$t('commons.please_select') } }, [_c('el-radio-group', {
    model: {
      value: (_vm.curCol.opt),
      callback: function($$v) {
        _vm.$set(_vm.curCol, 'opt', $$v)
      },
      expression: 'curCol.opt'
    }
  }, [_c('el-radio', { attrs: { 'label': 'Prohibit' } }, [_vm._v(_vm._s(_vm.$t('dataset.column_permission.prohibit')))]), _vm._v(' '), _c('el-radio', { attrs: { 'label': 'Desensitization' } }, [_vm._v(_vm._s(_vm.$t('dataset.column_permission.desensitization')))])], 1)], 1), _vm._v(' '), (_vm.curCol.opt === 'Desensitization') ? [_c('el-form-item', { attrs: { 'label': _vm.$t('dataset.column_permission.desensitization_rule') } }, _vm._l((_vm.optRules), function(ele) {
    return _c('el-radio', {
      key: ele.label,
      attrs: { 'label': ele.value },
      model: {
        value: (_vm.curCol.desensitizationRule.builtInRule), callback: function($$v) {
          _vm.$set(_vm.curCol.desensitizationRule, 'builtInRule', $$v)
        }, expression: 'curCol.desensitizationRule.builtInRule'
      }
    }, [_vm._v('\n                ' + _vm._s(ele.label) + '\n              ')])
  }), 1), _vm._v(' '), (_vm.curCol.desensitizationRule.builtInRule === 'custom') ? [_c('el-form-item', [_c('el-select', {
    attrs: { 'size': 'small' },
    on: { 'change': _vm.regionChange },
    model: {
      value: (_vm.curCol.desensitizationRule.customBuiltInRule), callback: function($$v) {
        _vm.$set(_vm.curCol.desensitizationRule, 'customBuiltInRule', $$v)
      }, expression: 'curCol.desensitizationRule.customBuiltInRule'
    }
  }, _vm._l((_vm.regionList), function(ele) {
    return _c('el-option', { key: ele.value, attrs: { 'label': ele.label, 'value': ele.value } })
  }), 1)], 1), _vm._v(' '), _c('el-form-item', [_vm._v('\n                ' + _vm._s(_vm.$t('dataset.column_permission.m')) + '\n                '), _c('el-input-number', {
    attrs: {
      'size': 'small',
      'controls-position': 'right',
      'min': 0,
      'max': 20
    }, on: { 'change': _vm.regionChange }, model: {
      value: (_vm.curCol.desensitizationRule.m), callback: function($$v) {
        _vm.$set(_vm.curCol.desensitizationRule, 'm', $$v)
      }, expression: 'curCol.desensitizationRule.m'
    }
  })], 1), _vm._v(' '), _c('el-form-item', [_vm._v('\n                ' + _vm._s(_vm.$t('dataset.column_permission.n')) + '\n                '), _c('el-input-number', {
    attrs: {
      'size': 'small',
      'controls-position': 'right',
      'min': 0,
      'max': 20
    }, on: { 'change': _vm.regionChange }, model: {
      value: (_vm.curCol.desensitizationRule.n), callback: function($$v) {
        _vm.$set(_vm.curCol.desensitizationRule, 'n', $$v)
      }, expression: 'curCol.desensitizationRule.n'
    }
  })], 1), _vm._v(' '), _c('el-form-item', [_vm._v('\n                ' + _vm._s(_vm.$t('dataset.preview')) + ' ' + _vm._s(_vm.preview) + '\n              ')])] : _vm._e()] : _vm._e()], 2)], 1) : _vm._e()]), _vm._v(' '), (_vm.datasetPermissionsTabActive === 'RowPermissions' && _vm.authDetail.authTargetType !== 'user') ? [_c('div', { staticClass: 'row-rules' }, [_c('span', [_vm._v(_vm._s(_vm.$t('auth.white_list')))]), _vm._v(' '), _c('span', { staticClass: 'explain' }, [_vm._v(_vm._s(_vm.$t('auth.white_user_not')))])]), _vm._v(' '), _c('div', [_c('el-select', {
    staticClass: 'white-list',
    attrs: {
      'popper-class': 'role-add-name',
      'multiple': '',
      'clearable': '',
      'size': 'small',
      'placeholder': _vm.$t('user.select_users')
    },
    model: {
      value: (_vm.defaultForm.whiteListUser), callback: function($$v) {
        _vm.$set(_vm.defaultForm, 'whiteListUser', $$v)
      }, expression: 'defaultForm.whiteListUser'
    }
  }, _vm._l((_vm.whiteListUsers), function(item) {
    return _c('el-option', {
      key: item.userId + item.email,
      attrs: { 'label': item.nickName, 'value': item.userId }
    }, [_c('p', { staticClass: 'name' }, [_vm._v(_vm._s(item.nickName))]), _vm._v(' '), _c('p', { staticClass: 'email' }, [_vm._v(_vm._s(item.email))])])
  }), 1)], 1)] : _vm._e(), _vm._v(' '), (_vm.datasetPermissionsTabActive === 'ColumnPermissions' && _vm.authDetail.authTargetType !== 'user') ? [_c('div', { staticClass: 'row-rules' }, [_c('span', [_vm._v(_vm._s(_vm.$t('auth.white_list')))]), _vm._v(' '), _c('span', { staticClass: 'explain' }, [_vm._v(_vm._s(_vm.$t('auth.white_user_not')))])]), _vm._v(' '), _c('div', [_c('el-select', {
    staticClass: 'white-list',
    attrs: {
      'popper-class': 'role-add-name',
      'multiple': '',
      'clearable': '',
      'size': 'small',
      'placeholder': _vm.$t('user.select_users')
    },
    model: {
      value: (_vm.columnPermissionForm.whiteListUser), callback: function($$v) {
        _vm.$set(_vm.columnPermissionForm, 'whiteListUser', $$v)
      }, expression: 'columnPermissionForm.whiteListUser'
    }
  }, _vm._l((_vm.whiteListUsers), function(item) {
    return _c('el-option', {
      key: item.userId + item.email,
      attrs: { 'label': item.nickName, 'value': item.userId }
    }, [_c('p', { staticClass: 'name' }, [_vm._v(_vm._s(item.nickName))]), _vm._v(' '), _c('p', { staticClass: 'email' }, [_vm._v(_vm._s(item.email))])])
  }), 1)], 1)] : _vm._e(), _vm._v(' '), _c('div', { staticClass: 'foot' }, [_c('el-button', {
    staticClass: 'btn normal',
    on: { 'click': _vm.clearData }
  }, [_vm._v(_vm._s(_vm.$t('fu.steps.cancel')) + '\n      ')]), _vm._v(' '), _c('el-button', {
    staticClass: 'btn',
    attrs: { 'type': 'primary' },
    on: { 'click': _vm.confirm }
  }, [_vm._v(_vm._s(_vm.$t('fu.table.ok')) + '\n      ')])], 1)], 2)], 1)
}
var staticRenderFns = []
module.exports = { render: render, staticRenderFns: staticRenderFns }
