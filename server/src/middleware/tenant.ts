export const tenant = (req: any, res: any, next: any) => {
  req.collegeId = req.user.college;
  next();
};