export class RequiredFieldError extends Error {
  constructor(field: string) {
    super(field)
    this.name = 'RequiredFieldError'
  }
}