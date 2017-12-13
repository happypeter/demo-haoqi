export const newDishFormInputs = [
  {
    name: 'name',
    iconType: 'heart',
    placeholder: '名称'
  },
  {
    name: 'desc',
    iconType: 'file-text',
    placeholder: '描述'
  },
  {
    name: 'price',
    iconType: 'pay-circle-o',
    placeholder: '价格'
  }
]

export const config = {
  rules: [{ type: 'string', required: true, message: '必填项目' }]
}
