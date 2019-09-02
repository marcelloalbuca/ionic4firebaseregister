import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-page',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  userPosts;

  constructor(private afs: AngularFirestore, private user: UserService, private router: Router) {
    const posts = afs.doc(`users/${user.getUID()}`);
    this.userPosts = posts.valueChanges();
  }

  goTo(postID: string){
    this.router.navigate(['/tabs/posts/' + postID])
  }

  ngOnInit() {}
}
