import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor() {}

  canActivate(context: ExecutionContext): boolean {
    // console.log(context.switchToHttp().getRequest());
    
    // console.log(context.switchToHttp().getRequest().headers.authorization.substring(7));
  
    
    return true;
  }
}
